/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Ajv, { ValidateFunction } from 'ajv';

import apiV1 from '../schema/kinds/API.v1alpha1.schema.json';
import componentV1 from '../schema/kinds/Component.v1alpha1.schema.json';
import domainV1 from '../schema/kinds/Domain.v1alpha1.schema.json';
import groupV1 from '../schema/kinds/Group.v1alpha1.schema.json';
import locationV1 from '../schema/kinds/Location.v1alpha1.schema.json';
import resourceV1 from '../schema/kinds/Resource.v1alpha1.schema.json';
import systemV1 from '../schema/kinds/System.v1alpha1.schema.json';
import userV1 from '../schema/kinds/User.v1alpha1.schema.json';
import entitySchema from '../schema/Entity.schema.json';
import entityEnvelopeSchema from '../schema/EntityEnvelope.schema.json';
import entityMetaSchema from '../schema/EntityMeta.schema.json';
import commonSchema from '../schema/shared/common.schema.json';

const ajv = new Ajv({
  allowUnionTypes: true,
  allErrors: true,
  validateSchema: true,
  schemas: [
    entityEnvelopeSchema,
    entitySchema,
    entityMetaSchema,
    commonSchema,
    apiV1,
    componentV1,
    domainV1,
    groupV1,
    locationV1,
    resourceV1,
    systemV1,
    userV1,
  ],
});

// A local cache of compiled schemas, to avoid duplicate work.
// The keys are JSON stringified versions of the schema
const compiledSchemaCache = new Map<string, ValidateFunction<unknown>>();

// The core schemas that others can depend on

export function throwAjvError(
  errors: ValidateFunction<unknown>['errors'],
): never {
  if (!errors?.length) {
    throw new TypeError('Unknown error');
  }

  const error = errors[0];
  throw new TypeError(
    `${error.instancePath || '<root>'} ${error.message}${
      error.params
        ? ` - ${Object.entries(error.params)
            .map(([key, val]) => `${key}: ${val}`)
            .join(', ')}`
        : ''
    }`,
  );
}

// Compiles the given schema, and makes sure to also grab any core dependencies
// that it depends on
export function compileAjvSchema(
  schema: string,
  options: { disableCache?: boolean } = {},
): ValidateFunction<unknown> {
  const disableCache = options?.disableCache ?? false;
  const cacheKey = disableCache ? '' : JSON.stringify(schema);

  if (!disableCache) {
    const cached = compiledSchemaCache.get(cacheKey);
    if (cached) {
      return cached;
    }
  }

  const compiled = ajv.getSchema(schema);
  if (compiled === undefined) {
    throw new Error(`Failed to find schema ${schema}`);
  }

  if (!disableCache) {
    compiledSchemaCache.set(cacheKey, compiled);
  }

  return compiled;
}
