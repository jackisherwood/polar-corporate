<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <polar-header />
      <main>
        <hero />

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-24 lg:py-32">
          <div
            class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
          >
            <h2
              class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
            >
              About PolarCI
            </h2>
            <p
              class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
            >
              We  work on the things we care about
            </p>
            <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              We are a team of designers, developers, marketers and technology experts that care about the projects and people that we work with
            </p>
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="feature in features"
                  :key="feature.name"
                  class="pt-6"
                >
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <span
                          class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg"
                        >
                          <component
                            :is="feature.icon"
                            class="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3
                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                      >
                        {{ feature.name }}
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div
            class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
          >
            <div>
              <h2
                class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
              >
                Our team is Reliable, Experienced & Productive
              </h2>
              <p
                class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
              >
                Trusted by thousands of companies and clients
              </p>
              <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Collectively our team has been delivering great software for decades
              </p>
            </div>
              <dl
              class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8"
            >
              <div class="flex flex-col">
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Projects Completed
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-gray-900">150+</dd>
              </div>
              <div class="flex flex-col mt-10 sm:mt-0">
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Lines of Code
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-gray-900">2.5M+</dd>
              </div>
              <div class="flex flex-col mt-10 sm:mt-0">
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Compute Events
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-gray-900">
                  10T+
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="relative bg-gray-900">
          <div
            class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
          >
            <img
              class="w-full h-full object-cover"
              src="https://polarci-a171f.web.app/img/screenshot.png"
              alt=""
            />
            <div
              aria-hidden="true"
              class="absolute inset-0 bg-gradient-to-r from-teal-100 to-cyan-100 mix-blend-multiply"
            />
          </div>
          <div
            class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"
          >
            <div class="md:ml-auto md:w-1/2 md:pl-10">
              <h2
                class="text-base font-semibold uppercase tracking-wider text-gray-300"
              >
                A Polar/CI Original
              </h2>
              <p
                class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl"
              >
                Trading software for everyone
              </p>
              <p class="mt-3 text-lg text-gray-300">
                When we aren't busy building custom software for our clients, we also create our own originals.
                <br/>
                <br/>
                Investing and trading cryptocurrencies just got a whole lot easier. Take the guesswork out of trading and get signaled when it's the right time to buy or sell your favorite cryptocurrency.
              </p>
              <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                  <a
                    href="https://polarci-a171f.web.app/"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                     Get our trading app
                    <ExternalLinkIcon
                      class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <polar-footer />
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/vue/solid";

import PolarFooter from "../components/PolarFooter.vue";
import PolarHeader from "../components/PolarHeader.vue";
import Hero from "../components/Hero.vue";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const features = [
  {
    name: "Big Data & IoT",
    description:
      "Increasingly, everything is connected to the internet. From people, computers and sensors to medical devices. We build solutions that capture events, behaviours, intent and activities in order to analyze and visualize what each are doing.",
    icon: CloudUploadIcon,
  },
  {
    name: "Web & Mobile",
    description:
      "The web is not dead, but there are more mobile-first start ups than ever. Our approach is to leverage HTML5 technologies to deliver great experiences on all platforms including desktops, iOS and Android.",
    icon: LockClosedIcon,
  },
  {
    name: "Cloud & Consult",
    description:
      "The cloud is more than an overused and cliched term. For startups trying to stay lean and conserve capital it's a necessity, for established companies it promises competitive advantages. We can help with any cloud deployment or migration.",
    icon: RefreshIcon,
  },
  {
    name: "Advanced Security",
    description:
      "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Powerful API",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon,
  },
  {
    name: "Database Backups",
    description:
      "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Article", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: {
      name: "Roel Aufderehar",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Video", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    author: {
      name: "Brenna Goyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    author: {
      name: "Daniela Metz",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "11 min",
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    ExternalLinkIcon,
    MenuIcon,
    XIcon,
    PolarFooter,
    PolarHeader,
    Hero,
  },
  setup() {
    return {
      navigation,
      features,
      blogPosts,
    };
  },
};
</script>
