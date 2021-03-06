<template>
  <div>
    <!-- Progress bar -->
    <div class="progress-container fixed top-0">
      <div class="progress-bar" id="progress_bar"></div>
    </div>
    <!-- Back arrow link -->
    <div class="fixed ml-2 md:ml-16 mt-8 md:mt-8">
      <router-link to="/works">
        <ion-icon
          class="transform scale-90 md:scale-100 hover:scale-150 transition duration-150 ease-in-out font-bold text-2xl text-black"
          name="arrow-back-outline"
        />
      </router-link>
    </div>
    <!-- Top arrow link -->
    <span id="top"></span>
    <div
      class="back-top transform -translate-y-0 hover:-translate-y-3 transition duration-300 ease-in-out right-0 bottom-0 fixed mr-4 md:mr-12 mb-4 md:mb-12 bg-black text-white p-2"
    >
      <a href="#top">
        <ion-icon class="font-bold text-2xl" name="arrow-up-outline" />
      </a>
    </div>
    <!-- Page Content -->
    <!-- Project Header -->
    <section>
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-11 px-10 md:px-0 py-24 gap-12">
          <div class="col-span-2">
            <h1 class="font-bold tracking-wide text-md mb-4 text-left sm:text-center">Year</h1>
            <p
              class="tracking-wide leading-loose text-sm font-normal text-gray-700 text-left sm:text-center"
            >2020</p>
          </div>
          <div class="col-span-2">
            <h1 class="font-bold tracking-wide text-md mb-4">Tech Stack</h1>
            <ul
              v-for="tech in project.tech_stack"
              :key="tech.id"
              class="tracking-wide leading-loose text-sm font-normal text-gray-700"
            >
              <li>{{ tech.name }}</li>
            </ul>
          </div>
          <div class="col-span-7">
            <h1 class="font-bold tracking-wide text-5xl mb-8">{{ project.project_name }}</h1>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.description.first_paragraph }}</p>
            <p
              class="tracking-wide leading-loose text-md font-normal mt-4 text-gray-700 mb-12"
            >{{ project.description.second_paragraph }}</p>
            <a
              :href="project.launch_project.href"
              target="blank"
              class="transition duration-150 ease-in-out px-4 py-2 border-solid border-2 border-black bg-transparent hover:bg-black text-black hover:text-white"
            >
              Visit website&nbsp;&nbsp;
              <ion-icon name="open-outline" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- First Image -->
    <section class="bg-cover bg-center py-32 md:py-56" :style="project.bg_img.first_image"></section>
    <!-- First topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 py-20">
          <div>
            <h1
              class="font-bold tracking-wide text-4xl leading-relaxed mb-6 md:mb-0"
            >{{ project.headers.first_topic.title }}</h1>
          </div>
          <div>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700 mb-12"
            >{{ project.headers.first_topic.body }}</p>
            <a
              :href="project.launch_project.figma_link"
              target="blank"
              class="transition duration-150 ease-in-out px-4 py-2 border-solid border-2 border-black bg-transparent hover:bg-black text-black hover:text-white"
            >
              Figma link&nbsp;&nbsp;
              <ion-icon name="open-outline" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Screenshots -->
    <section class="bg-gray-100">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="py-12 px-10 md:px-0">
          <img
            v-for="screenshot in project.screenshots_design"
            :key="screenshot.id"
            class="object-cover w-full shadow-lg mt-12 mb-12"
            v-lazy="screenshot.src"
            :alt="screenshot.alt"
          />
        </div>
      </div>
    </section>
    <!-- Second topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 py-20">
          <div>
            <h1
              class="font-bold tracking-wide text-4xl leading-relaxed mb-6 md:mb-0"
            >{{ project.headers.second_topic.title }}</h1>
          </div>
          <div>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700 mb-12"
            >{{ project.headers.second_topic.body }}</p>
            <a
              :href="project.launch_project.source_code"
              target="blank"
              class="transition duration-150 ease-in-out px-4 py-2 border-solid border-2 border-black bg-transparent hover:bg-black text-black hover:text-white"
            >
              Source code&nbsp;&nbsp;
              <ion-icon name="open-outline" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Screenshots -->
    <section class="bg-gray-100">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="py-12 px-10 md:px-0">
          <img
            v-for="screenshot in project.screenshots_implementation"
            :key="screenshot.id"
            class="object-cover w-full shadow-lg mt-12 mb-12"
            v-lazy="screenshot.src"
            :alt="screenshot.alt"
          />
        </div>
      </div>
    </section>
    <!-- Third topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 py-20 gap-10">
          <div>
            <h1
              class="font-bold tracking-wide text-4xl leading-relaxed mb-6 md:mb-0"
            >{{ project.headers.third_topic.title }}</h1>
          </div>
          <div>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.headers.third_topic.first_body }}</p>
          </div>
          <div>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.headers.third_topic.second_body }}</p>
          </div>
          <div>
            <p
              class="tracking-wide leading-loose text-md font-normal text-gray-700"
            >{{ project.headers.third_topic.third_body }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Next/Previous Project -->
    <section class="bg-gray-50">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="flex flex-auto justify-evenly pt-32 pb-10 text-center align-center">
          <div class="w-1/5 self-center">
            <router-link :to="project.routing.previous">
              <h1 class="font-medium tracking-wide text-md leading-relaxed">
                <ion-icon class="align-middle" name="arrow-back-outline" />&nbsp;&nbsp;Previous Project
              </h1>
            </router-link>
          </div>
          <div class="w-1/5 self-center">
            <h1 class="font-bold tracking-wide text-3xl leading-relaxed">Works</h1>
          </div>
          <div class="w-1/5 self-center">
            <router-link :to="project.routing.next">
              <h1 class="font-medium tracking-wide text-md leading-relaxed">
                Next Project&nbsp;&nbsp;
                <ion-icon class="align-middle" name="arrow-forward-outline" />
              </h1>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Document onScroll functions
window.onscroll = function () { scroll(); anchorFunction() }
// Progress bar scroll function
function scroll () {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  document.querySelector('#progress_bar').style.width = scrolled + '%'
}
// Back to top - Anchor
// When the user scrolls down 20px from the top of the document, show the anchor
function anchorFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.back-top').style.display = 'block'
  } else {
    document.querySelector('.back-top').style.display = 'none'
  }
}
// Document xport
export default {
  props: ['project']
}
</script>
