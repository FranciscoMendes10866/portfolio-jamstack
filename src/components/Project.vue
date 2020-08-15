<template>
  <div>
    <!-- Back arrow link -->
    <div class="fixed ml-2 md:ml-8 mt-8 md:mt-8">
      <router-link to="/works">
        <ion-icon
          class="transform scale-90 md:scale-100 hover:scale-150 transition duration-150 ease-in-out font-bold text-2xl text-gray-700"
          name="arrow-back-outline"
        />
      </router-link>
    </div>
    <!-- Project Header -->
    <section>
      <div class="container mx-auto">
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
    <section class="bg-cover py-64" :style="project.bg_img.first_image"></section>
    <!-- First topic -->
    <section class="bg-gray-200">
      <div class="container mx-auto">
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
      <div class="container mx-auto">
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
      <div class="container mx-auto">
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
      <div class="container mx-auto">
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
      <div class="container mx-auto">
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
      <div class="container mx-auto">
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
export default {
  props: ['project']
}
</script>
