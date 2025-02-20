import {
  FaReact,
  FaJava,
  FaCss3Alt,
  FaNodeJs,
  FaVuejs,
  FaSass,
  FaAws,
  FaFigma,
  FaBootstrap,
  FaDocker,
  FaYarn,
} from 'react-icons/fa';
import { AiFillHtml5, AiOutlineAntDesign, AiFillApi } from 'react-icons/ai';
import {
  SiSocketdotio,
  SiNetlify,
  SiVercel,
  SiAdobexd,
  SiKubernetes,
  SiReacthookform,
  SiNextui,
  SiShadcnui,
  SiRedis,
  SiZod,
  SiRedux,
  SiReactquery,
  SiMui,
  SiExpress,
  SiChartdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiStorybook,
  SiStrapi,
  SiPostman,
  SiTypescript,
  SiStyledcomponents,
  SiChakraui,
  SiNestjs,
  SiPostcss,
  SiPrisma,
  SiFirebase,
  SiNginx,
  SiRadixui,
  SiGithubactions,
  SiSupabase,
  SiVite,
  SiPrometheus,
  SiGrafana,
  SiGraphql,
  SiSwagger,
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandNuxt } from 'react-icons/tb';
import { DiGit, DiNpm } from 'react-icons/di';

const skillDetails = [
  {
    name: 'HTML',
    key: 'html',
    icon: <AiFillHtml5 />,
    iconURL: '/assets/html-5.svg',
  },
  {
    name: 'CSS',
    key: 'css',
    icon: <FaCss3Alt />,
    iconURL: '/assets/css3.svg',
  },
  {
    name: 'JavaScript',
    key: 'js',
    icon: <SiJavascript />,
    iconURL: '/assets/javascript.svg',
  },
  {
    name: 'Typescript',
    key: 'ts',
    icon: <SiTypescript />,
    iconURL: '/assets/typescript.svg',
  },
  {
    name: 'React.js',
    key: 'react',
    icon: <FaReact />,
    iconURL: '/assets/react.svg',
  },
  {
    name: 'Next.js',
    key: 'next',
    icon: <TbBrandNextjs />,
    iconURL: '/assets/next-js.svg',
  },
  {
    name: 'Redux',
    key: 'redux',
    icon: <SiRedux />,
    iconURL: '/assets/redux.svg',
  },
  // {
  //   name: "Vue.js",
  //   key: "vue",
  //   icon: <FaVuejs />,
  //   iconURL: "/assets/vue-js.svg",
  // },
  // {
  //   name: "Nuxt.js",
  //   key: "nuxt",
  //   icon: <TbBrandNuxt />,
  //   iconURL: "/assets/nuxt-js.svg",
  // },
  // {
  //   name: "Java",
  //   key: "java",
  //   icon: <FaJava />,
  //   iconURL: "/assets/java.svg",
  // },
  {
    name: 'Node.js',
    key: 'node',
    icon: <FaNodeJs />,
    iconURL: '/assets/nodejs.svg',
  },
  {
    name: 'Express.js',
    key: 'express',
    icon: <SiExpress />,
    iconURL: '/assets/express-js.svg',
  },
  {
    name: 'Nest.js',
    key: 'nest',
    icon: <SiNestjs />,
    iconURL: '/assets/nest-js.svg',
  },
  {
    name: 'Firebase',
    key: 'firebase',
    icon: <SiFirebase />,
    iconURL: '/assets/firebase.svg',
  },
  {
    name: 'Supabase',
    key: 'supabase',
    icon: <SiSupabase />,
    iconURL: '/assets/supabase.png',
  },
  {
    name: 'Socket.io',
    key: 'socket.io',
    icon: <SiSocketdotio />,
    iconURL: '/assets/socket-io.png',
  },
  {
    name: 'Chart.js',
    key: 'chart',
    icon: <SiChartdotjs />,
    iconURL: '/assets/chartjs.svg',
  },
  // {
  //   name: 'Strapi',
  //   key: 'strapi',
  //   icon: <SiStrapi />,
  //   iconURL: '/assets/strapi.svg',
  // },
  // {
  //   name: 'Prisma',
  //   key: 'prisma',
  //   icon: <SiPrisma />,
  //   iconURL: '/assets/prisma.svg',
  // },
  {
    name: 'MongoDB',
    key: 'mongodb',
    icon: <SiMongodb />,
    iconURL: '/assets/mongodb.svg',
  },
  {
    name: 'SQL',
    key: 'sql',
    icon: <SiMysql />,
    iconURL: '/assets/sql.svg',
  },
  {
    name: 'MySQL',
    key: 'mysql',
    icon: <SiMysql />,
    iconURL: '/assets/mysql.svg',
  },
  {
    name: 'PostgreSQL',
    key: 'postgresql',
    icon: <SiMysql />,
    iconURL: '/assets/postgresql.png',
  },
  {
    name: 'Redis',
    key: 'redis',
    icon: <SiRedis />,
    iconURL: '/assets/redis.svg',
  },
  {
    name: 'Postman',
    key: 'postman',
    icon: <SiPostman />,
    iconURL: '/assets/postman.svg',
  },
  {
    name: 'Vercel',
    key: 'vercel',
    icon: <SiVercel />,
    iconURL: '/assets/vercel.svg',
  },
  {
    name: 'Netlify',
    key: 'netlify',
    icon: <SiNetlify />,
    iconURL: '/assets/netlify.svg',
  },
  {
    name: 'Vite',
    key: 'vite',
    icon: <SiVite />,
    iconURL: '/assets/vite.png',
  },
  {
    name: 'Amazon Web Services',
    key: 'aws',
    icon: <FaAws />,
    iconURL: '/assets/amazon-web-services.svg',
  },
  // {
  //   name: 'Nginx',
  //   key: 'nginx',
  //   icon: <SiNginx />,
  //   iconURL: '/assets/nginx.svg',
  // },
  {
    name: 'Docker',
    key: 'docker',
    icon: <FaDocker />,
    iconURL: '/assets/docker.svg',
  },
  // {
  //   name: 'Kubernetes',
  //   key: 'kubernetes',
  //   icon: <SiKubernetes />,
  //   iconURL: '/assets/kubernetes.png',
  // },
  {
    name: 'Websockets',
    key: 'websockets',
    icon: <SiSocketdotio />,
    iconURL: '/assets/websockets.png',
  },
  // {
  //   name: 'Prometheus',
  //   key: 'prometheus',
  //   icon: <SiPrometheus />,
  //   iconURL: '/assets/prometheus.png',
  // },
  // {
  //   name: 'Grafana',
  //   key: 'grafana',
  //   icon: <SiGrafana />,
  //   iconURL: '/assets/grafana.png',
  // },
  {
    name: 'GraphQL',
    key: 'graphql',
    icon: <SiGraphql />,
    iconURL: '/assets/graphql.png',
  },
  {
    name: 'Rest API',
    key: 'rest',
    icon: <AiFillApi />,
    iconURL: '/assets/rest.png',
  },
  {
    name: 'Syntactically Awesome Style Sheets',
    key: 'sass',
    icon: <FaSass />,
    iconURL: '/assets/sass.svg',
  },
  {
    name: 'TailwindCSS',
    key: 'tailwind',
    icon: <SiTailwindcss />,
    iconURL: '/assets/tailwind-css.svg',
  },
  {
    name: 'Post CSS',
    key: 'postcss',
    icon: <SiPostcss />,
    iconURL: '/assets/postcss.svg',
  },
  {
    name: 'Less',
    key: 'less',
    icon: <SiPostcss />,
    iconURL: '/assets/less.png',
  },
  {
    name: 'Figma',
    key: 'figma',
    icon: <FaFigma />,
    iconURL: '/assets/figma.svg',
  },
  {
    name: 'Storybook',
    key: 'storybook',
    icon: <SiStorybook />,
    iconURL: '/assets/storybook.svg',
  },
  {
    name: 'AdobeXD',
    key: 'adobe',
    icon: <SiAdobexd />,
    iconURL: '/assets/adobe-xd.svg',
  },
  {
    name: 'NPM',
    key: 'npm',
    icon: <DiNpm />,
    iconURL: '/assets/npm.svg',
  },
  {
    name: 'Yarn',
    key: 'yarn',
    icon: <FaYarn />,
    iconURL: '/assets/yarn.svg',
  },
  {
    name: 'Git',
    key: 'git',
    icon: <DiGit />,
    iconURL: '/assets/git.svg',
  },
  {
    name: 'GitHub Actions',
    key: 'githubactions',
    icon: <SiGithubactions />,
    iconURL: '/assets/githubactions.svg',
  },
  {
    name: 'Jest',
    key: 'jest',
    icon: <SiGithubactions />,
    iconURL: '/assets/jest.png',
  },
  {
    name: 'Cypress',
    key: 'cypress',
    icon: <SiGithubactions />,
    iconURL: '/assets/cypress.png',
  },
  {
    name: 'Swagger UI',
    key: 'swagger',
    icon: <SiSwagger />,
    iconURL: '/assets/swagger.png',
  },
  // {
  //   name: 'Puppeteer',
  //   key: 'puppeteer',
  //   icon: <SiSwagger />,
  //   iconURL: '/assets/puppeteer.png',
  // },
  {
    name: 'React Query',
    key: 'react-query',
    icon: <SiReactquery />,
    iconURL: '/assets/react-query.png',
  },
  {
    name: 'React Hook Form',
    key: 'react-hook-form',
    icon: <SiReacthookform />,
    iconURL: '/assets/react-hook-form.svg',
  },
  {
    name: 'Zod',
    key: 'zod',
    icon: <SiZod />,
    iconURL: '/assets/zod.png',
  },
  {
    name: 'Shadcn UI',
    key: 'shadcn',
    icon: <SiShadcnui />,
    iconURL: '/assets/shadcn.png',
  },
  {
    name: 'Radix UI',
    key: 'radix',
    icon: <SiRadixui />,
    iconURL: '/assets/radix.svg',
  },
  {
    name: 'Chakra UI',
    key: 'chakra-ui',
    icon: <SiChakraui />,
    iconURL: '/assets/chakra-ui.svg',
  },
  {
    name: 'Styled-Components',
    key: 'styled-components',
    icon: <SiStyledcomponents />,
    iconURL: '/assets/styled-components.png',
  },
  {
    name: 'Ant-Design',
    key: 'ant-design',
    icon: <AiOutlineAntDesign />,
    iconURL: '/assets/ant-design.svg',
  },
  {
    name: 'Material UI',
    key: 'material-ui',
    icon: <SiMui />,
    iconURL: '/assets/material-ui.png',
  },
  {
    name: 'Bootstrap',
    key: 'bootstrap',
    icon: <FaBootstrap />,
    iconURL: '/assets/bootstrap.png',
  },
  {
    name: 'React Bootstrap',
    key: 'react-bootstrap',
    icon: <FaBootstrap />,
    iconURL: '/assets/react-bootstrap.svg',
  },
];

export { skillDetails };
