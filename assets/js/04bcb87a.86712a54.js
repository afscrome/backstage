/*! For license information please see 04bcb87a.86712a54.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[93091],{675251:(e,t,n)=>{n(727418);var o=n(667294),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),t.Fragment=a("react.fragment")}var r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,a={},d=null,h=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:s,type:e,key:d,ref:h,props:a,_owner:r.current}}t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},59599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(785893),s=n(511151);const a={title:"Where do you start when adopting Backstage?",author:"Austin Lamon, Spotify",authorURL:"https://www.linkedin.com/in/austinlamon"},r=void 0,i={permalink:"/blog/2021/05/20/adopting-backstage",source:"@site/blog/2021-05-20-adopting-backstage.mdx",title:"Where do you start when adopting Backstage?",description:"Create, Manage, Explore",date:"2021-05-20T00:00:00.000Z",formattedDate:"May 20, 2021",tags:[],readingTime:9.605,hasTruncateMarker:!0,authors:[{name:"Austin Lamon, Spotify",url:"https://www.linkedin.com/in/austinlamon"}],frontMatter:{title:"Where do you start when adopting Backstage?",author:"Austin Lamon, Spotify",authorURL:"https://www.linkedin.com/in/austinlamon"},unlisted:!1,prevItem:{title:"How Spotify is helping more companies adopt Backstage",permalink:"/blog/2021/06/22/spotify-backstage-is-growing"},nextItem:{title:"New Backstage feature: Kubernetes for Service owners",permalink:"/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners"}},l={authorsImageUrls:[void 0]},d=[{value:"Infrastructure as tech culture",id:"infrastructure-as-tech-culture",level:2},{value:"Three jobs: Create, manage, explore",id:"three-jobs-create-manage-explore",level:2},{value:"Create",id:"create",level:3},{value:"Manage",id:"manage",level:3},{value:"Explore",id:"explore",level:3},{value:"Sounds great. Where do I start?",id:"sounds-great-where-do-i-start",level:2},{value:"My org has ~200 engineers (and is growing fast)",id:"my-org-has-200-engineers-and-is-growing-fast",level:3},{value:"My org has ~1,000 engineers",id:"my-org-has-1000-engineers",level:3},{value:"My org has 1,000+ engineers",id:"my-org-has-1000-engineers-1",level:3},{value:"More questions about adopting Backstage?",id:"more-questions-about-adopting-backstage",level:2}];function h(e){const t=Object.assign({p:"p",img:"img",h2:"h2",a:"a",ul:"ul",li:"li",em:"em",strong:"strong",h3:"h3"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Create, Manage, Explore",src:n(597791).Z+"",width:"1200",height:"675"})}),"\n",(0,o.jsx)(t.p,{children:"One of the greatest strengths of Backstage also presents a never-ending challenge: Backstage is highly customizable and allows you to easily build a unique developer portal suited to your organization\u2019s needs. The downside of this flexibility is that it can be hard to know where to start. Backstage can do so many things \u2014 integrating every part of your tech infrastructure and developer experience \u2014 but if you set off building a developer portal without a plan, it\u2019s easy to get overwhelmed by all the possibilities. To help you form your plan, this post will detail how Spotify came to design our internal portal and recommend potential models for you to use when designing and building your own."}),"\n","\n",(0,o.jsx)(t.h2,{id:"infrastructure-as-tech-culture",children:"Infrastructure as tech culture"}),"\n",(0,o.jsx)(t.p,{children:"Before providing recommendations on getting started with Backstage, it\u2019s helpful to have a bit of context as to why Spotify made the design decisions we did. No two companies are identical \u2014 and thus, no two Backstage implementations are the same."}),"\n",(0,o.jsxs)(t.p,{children:["Rolling back the clock just a few years, ",(0,o.jsx)(t.a,{href:"https://engineering.atspotify.com/2021/05/18/a-product-story-the-lessons-of-backstage-and-spotifys-autonomous-culture/",children:"Spotify was challenged"})," to continue to scale our engineering team (and the number of features and components built) but retain the speed of product development. Some user research with Spotify developers highlighted a clear problem: there was simply too much non-documented institutional knowledge needed to get things done. No one could find anything and everyone was interrupting everyone else trying to figure things out."]}),"\n",(0,o.jsx)(t.p,{children:"Spotify\u2019s developers were facing three big challenges on a daily basis:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"They not only needed to build software quickly, they also needed to pass along knowledge to new joiners about how best to create new components."}),"\n",(0,o.jsx)(t.li,{children:"They needed to somehow maintain a mental model of the systems their squad owned. (Or, if they were lucky, they found a hopefully-up-to-date spreadsheet tracking this information.)"}),"\n",(0,o.jsx)(t.li,{children:"They needed to keep an eye on what squads around them might be building to ensure they could reuse systems when they needed to solve similar problems in the future."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In short, Spotify developers needed to continue building industry leading features at breakneck speed, while simultaneously maintaining a mental model for all the software at Spotify (oh, and help every new joiner develop that mental model as well!)."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"three-jobs-create-manage-explore",children:"Three jobs: Create, manage, explore"}),"\n",(0,o.jsxs)(t.p,{children:["Around the same time, the ",(0,o.jsx)(t.a,{href:"https://hbr.org/2016/09/know-your-customers-jobs-to-be-done",children:"jobs to be done"})," framework was becoming popular and luckily, a few Spotifiers helped guide the vision for a ",(0,o.jsx)(t.em,{children:"sense-making tool for developers"})," toward using it. After user research and many failed attempts, we landed on three jobs Spotify developers needed to do consistently:"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Create"}),": Spotify developers want to delight their customers with incredible features. They create new software to do that."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Manage"}),": Spotify developers are proud of their work and treat their software and data like products. That requires maintaining all the software they own on an ongoing basis."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Explore"}),": Spotify developers want to solve new, yet unsolved problems. They try to build on existing systems to help them do that."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"So: make software, maintain the software you own throughout its lifecycle, and integrate with other people\u2019s software."}),"\n",(0,o.jsx)(t.p,{children:"Within today\u2019s complex development environments, there are barriers both big and small that get in the way of those three jobs. Backstage provides the building blocks for removing those barriers, streamlining your development cycle, and letting developers do what they really want to do: build great features. Let\u2019s take a closer look at each of these jobs."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Backstage Software Templates rocket",src:n(745112).Z+"",width:"200",height:"200"})}),"\n",(0,o.jsx)(t.h3,{id:"create",children:"Create"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Job:"})," You\u2019re an engineer, ready to start building a new microservice. Do you just pick whatever framework you want? How do you reserve capacity to run your service in production? What about managing CI/CD?"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Tool:"})," At Spotify, we use ",(0,o.jsx)(t.strong,{children:"Backstage Software Templates"})," to simplify all of this, reducing time\u2013to\u2013Hello World to just a few clicks. Instead of researching Spring Boot versus Helidon, opening a Jira ticket, rummaging through docs, and configuring CI automations, you just choose a template and your project is automatically set up in the repo for you, with the CI already running your first build."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Result:"})," By making it easier to start new projects, your engineers get to the good part of coding features faster. And your organization\u2019s best practices are built into the templates, encouraging standards and reducing complexity in your tech ecosystem."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Backstage Service Catalog system",src:n(326522).Z+"",width:"200",height:"200"})}),"\n",(0,o.jsx)(t.h3,{id:"manage",children:"Manage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Job:"})," You\u2019re on a small team that owns a dozen services. Whenever you update and deploy those services, you\u2019re switching between your CI, the AWS console, a security dashboard, and a CLI so you can try to figure out which Kubernetes cluster your service ended up on. In other words, you have a lot of open windows and tabs, and each step means switching to a new interface."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Tool:"})," All of your team\u2019s software components are organized together on one page in the ",(0,o.jsx)(t.strong,{children:"Backstage Service Catalog"}),". Go to any service\u2019s page from there and its CI/CD status, ",(0,o.jsx)(t.a,{href:"https://backstage.io/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners",children:"Kubernetes deployment status"}),", documentation, security checks \u2014 and everything else related to that service \u2014 is grouped together in one seamless interface that shows you only the info you want."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Result"}),": One page in Backstage has everything you need to manage the software you own. No more context-switching. No more digging through your cloud provider\u2019s obscure admin features. Outside the repo and your IDE, everything you need to manage your service is right inside Backstage."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Backstage explorer",src:n(377992).Z+"",width:"200",height:"200"})}),"\n",(0,o.jsx)(t.h3,{id:"explore",children:"Explore"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Job:"})," You're building a new mobile feature that needs to ensure a user is paying for the premium version of your product \u2014 but someone must\u2019ve already built a library that handles that, right? A company-wide email and a few calls for help on Slack yield no response, so you resign yourself to building the capability yourself. Turns out someone did build the library you needed. They were just on vacation so they didn\u2019t see your messages. How do you enable better discovery and collaboration across your org?"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Tools:"})," At Spotify, anyone can find everyone else\u2019s software \u2014 because everything is centralized inside Backstage, organized by the ",(0,o.jsx)(t.strong,{children:"Backstage Service Catalog"})," and accessible by ",(0,o.jsx)(t.strong,{children:"search"}),". Go to any library or services page, and you\u2019ll find the owners and documentation, even its API and how to extend it if need be."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Result:"})," One place for everything, one place to search. Developers can more easily share components, build on top of each other\u2019s work, and discover tools, libraries, frameworks, documentation, system designs, org charts, and more."]}),"\n",(0,o.jsx)(t.h2,{id:"sounds-great-where-do-i-start",children:"Sounds great. Where do I start?"}),"\n",(0,o.jsx)(t.p,{children:"After talking with companies who have already adopted Backstage, we\u2019ve seen a few common strategies for getting started. The different strategies are based on the size of your engineering org (which often also corresponds with how fast you\u2019re growing)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"200 engineers",src:n(932622).Z+"",width:"1667",height:"731"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h3,{id:"my-org-has-200-engineers-and-is-growing-fast",children:"My org has ~200 engineers (and is growing fast)"}),"\n",(0,o.jsx)(t.p,{children:"You\u2019re big enough to start feeling the pain, and only getting bigger. Onboarding and discoverability are your biggest challenges."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Pain points:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"This size seems to be the tipping point \u2014 where complexity is taking hold, collaboration starts breaking down, and ad hoc solutions stop working."}),"\n",(0,o.jsx)(t.li,{children:"Often this is also when you\u2019re growing so fast (doubling in size every 6\u201312 months) that there are now more new engineers than old engineers."}),"\n",(0,o.jsx)(t.li,{children:"New engineers can\u2019t find anything, so they ask around, which pulls all your other engineers off-task with interruptions."}),"\n",(0,o.jsx)(t.li,{children:"Logjams form. One company told us how it was taking 3\u20134 days for pull requests to get merged."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Recommendation \u2014 Explore, then create:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"New engineers need an easy way to find out how to do things, so you\u2019re not just adding bodies, you\u2019re adding happy, productive contributors."}),"\n",(0,o.jsx)(t.li,{children:"To streamline onboarding, start with centralizing your documentation and making your tools and software components discoverable in Backstage."}),"\n",(0,o.jsx)(t.li,{children:"At this size, you might not have a dedicated platform/infra team in place yet, but Backstage can provide the framework for centralizing and sharing knowledge \u2014 from managing compliance requirements to finding the right API documentation."}),"\n",(0,o.jsx)(t.li,{children:"This allows both new and old engineers to collaborate more efficiently, easily discover best practices, and cuts down on duplicated work (e.g., a new team doesn\u2019t end up rebuilding a database that already exists but nobody can find)."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"1,000 engineers",src:n(176112).Z+"",width:"1667",height:"730"})}),"\n",(0,o.jsx)(t.h3,{id:"my-org-has-1000-engineers",children:"My org has ~1,000 engineers"}),"\n",(0,o.jsx)(t.p,{children:"You\u2019re officially big. Lots and lots of teams are managing lots and lots of software \u2014 and the frustration of switching between all the various tools to do that is growing exponentially."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Pain points:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Fragmentation and entropy are real threats to productivity. From security requirements to cluster management to a thousand data endpoints, there\u2019s too much to keep track of, leading to cognitive overload."}),"\n",(0,o.jsx)(t.li,{children:"A death by a thousand cuts: constantly logging into new interfaces \u2014 from your cloud provider\u2019s console to some brand new security tool then back to your CI/CD \u2014 is bogging your engineers down with too much context-switching and a lot of noise."}),"\n",(0,o.jsx)(t.li,{children:"Every day, it\u2019s getting more and more difficult for one team to manage their own microservices, data, and documentation, let alone share their knowledge with other teams."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Recommendation \u2014 Manage, then explore, then create:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Backstage will allow your teams to get a handle on the software they own, since everything they need to manage it is in one place."}),"\n",(0,o.jsx)(t.li,{children:"From CI/CD status to documentation to deciphering a monorepo, Backstage makes it easy to manage a service (or other software component) on a day-to-day basis."}),"\n",(0,o.jsx)(t.li,{children:"The service catalog also helps your developers visualize your existing software ecosystem, beyond the software they own. And with Backstage Software Templates, every new software component is already added to the catalog."}),"\n",(0,o.jsx)(t.li,{children:"Even at this scale, a small platform team should be all it takes to build and maintain your own version of Backstage. At Spotify, we have a 4-person team responsible for our internal version of Backstage, which is used by all of Spotify\u2019s 1,600+ developers."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"More than 1,000 engineers",src:n(445021).Z+"",width:"1667",height:"730"})}),"\n",(0,o.jsx)(t.h3,{id:"my-org-has-1000-engineers-1",children:"My org has 1,000+ engineers"}),"\n",(0,o.jsx)(t.p,{children:"Integrating infrastructure of this size and complexity can seem overwhelming. It\u2019s an even bigger challenge to bring this level of change to a well-established culture with ingrained processes."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Pain points:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"When you\u2019re this large, you\u2019ve incorporated a lot of technology and processes, as well as a lot of partners, each with their own technologies and processes."}),"\n",(0,o.jsx)(t.li,{children:"You\u2019re focussed on \u201creplacing cruft\u201d and bringing discoverability and order to your vast ecosystem of components and tools."}),"\n",(0,o.jsx)(t.li,{children:"Getting your tools adopted by your engineers while modernizing your tech stack and coordinating with your infra teams to improve your engineering practices across the whole company\u2026 it\u2019s a lot."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Recommendation \u2014 Create, then manage, then explore:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The fastest way to bring change to your ecosystem is to start at the beginning of the chain with Backstage Software Templates."}),"\n",(0,o.jsx)(t.li,{children:"With every new component created with your templates, you\u2019re establishing best practices and rewarding your developers with a streamlined experience focused on their needs \u2014 all the while building up your new service catalog."}),"\n",(0,o.jsxs)(t.li,{children:["The more the templates ease the process of starting up a project, the more your engineers will adopt them, and the faster the other benefits of Backstage will build up, transforming productivity across your organization. (",(0,o.jsx)(t.a,{href:"https://open.spotify.com/episode/7iuQ3ew1Wwpuiq6LbBKzCl",children:"That\u2019s how we did it at Spotify"}),".)"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"more-questions-about-adopting-backstage",children:"More questions about adopting Backstage?"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://backstage.spotify.com/",children:"Contact the Backstage team at Spotify."})," We\u2019ll share more about what we\u2019ve learned from our experience here at Spotify \u2014 and from other companies who are already using Backstage to transform their developer experience."]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},176112:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1000-engineers_v.2-ecd596ecb2ff20678c130aec9721e640.png"},445021:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1000-plus-engineers_v.2-065aeb2d2b978ff6423e02677c599811.png"},932622:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/200-engineers_v.2-8fb738ff2f7f8469278f4856372027c2.png"},597791:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-manage-explore-2cf3fcc7f3099f7c448176ea0cb2b791.gif"},745112:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-bdd2330dc9c541583fa7309a66f706ea.gif"},377992:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/explore-d24c2a82f8c32c904c45fd1243733928.gif"},326522:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/manage-ecc00b68159d623f309736eb7d7aeb63.gif"},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var o=n(667294);const s=o.createContext({});function a(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:a(e),o.createElement(s.Provider,{value:i},t)}}}]);