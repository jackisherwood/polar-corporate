<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <polar-header />

      <main class="overflow-hidden">
        <!-- Header -->
        <div class="bg-warm-gray-50">
          <div class="py-24 lg:py-32">
            <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                Work with us
              </h1>
              <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                PolarCI is digital studio that designs, builds and deploys applications for the web, mobile, IoT,
                blockchain and cloud.
              </p>
            </div>
          </div>
        </div>


      <div class="relative bg-white">
        <div class="lg:absolute lg:inset-0 hidden md:block">
          <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt="" />
          </div>
        </div>

        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div class="lg:col-start-2 lg:pl-8">
            <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 class="leading-6 text-cyan-600 font-semibold tracking-wide uppercase">Work with us</h2>
              <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Client Process
              </h3>
              <p class="mt-8 text-lg text-gray-500">
                We help our clients realize their vision by thoughtfully working together to capture clear
                specifications and requirements. We also like to provide wireframes, designs and mockups to keep
                everyone in sync and agreement.</p>
              <div class="mt-5 text-lg text-gray-500">
                <p>
                  We don't just disappear for 3 months and come up with an app in the end. We like to work with our
                  clients and keep them actively involved by including them in each development process with frequent
                  builds, releases and reviews.
                </p>
              </div>

              <h3 class="mt-10 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                For Developers
              </h3>

              <p class="mt-8 text-lg text-gray-500">
                As technologists we are expected to not only keep up with the times but also to break new ground with
                the technologies, platforms, software languages, design patterns and methodologies that lead to better
                products.
              </p>
              <p class="mt-8 text-lg text-gray-500">
                Though we are a team of polyglots we do particularly enjoy working with leading technologies like
                NodeJs, React & Vue, Typescript, Clojure, Elixir, MongoDB and Amazon AWS.
              </p>

              <p class="mt-8 text-lg text-gray-500">
                We are always looking for new team members and offer a diverse team to work with, challenging projects and a
                remote work environment.
              </p>

              <p class='mt-10'>
                <router-link to="/contact"> 
                  <button class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
                    Join the team
                  </button>
                </router-link>
              </p>
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
  import {
    Popover,
    PopoverButton,
    PopoverPanel
  } from "@headlessui/vue";
  import {
    MailIcon,
    MenuIcon,
    PhoneIcon,
    XIcon
  } from "@heroicons/vue/outline";
  import PolarFooter from "../components/PolarFooter.vue";
  import PolarHeader from "../components/PolarHeader.vue";
  import Hero from "../components/Hero.vue";
  export default {
    components: {
      Popover,
      PopoverButton,
      PopoverPanel,
      MailIcon,
      MenuIcon,
      PhoneIcon,
      XIcon,
      PolarFooter,
      PolarHeader,
      Hero,
    },
    setup() {
      return {
        // navigation,
        // features,
        // blogPosts,
      };
    },
  };
</script>