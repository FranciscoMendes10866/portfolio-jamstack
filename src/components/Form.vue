<template>
  <div>
    <section class="bg-white py-32">
      <div class="container mx-auto px-0 lg:px-24 xl:px-32">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              class="ml-4 md:ml-0 text-2xl md:text-4xl font-bold tracking-wide"
            >Let's talk.</h1>
          </div>
          <div class="mt-6 md:mt-0">
            <form class="w-full max-w-lg" name="contact" method="POST" data-netlify="true">
              <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                  <input
                    data-aos="fade-up"
                    data-aos-duration="600"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="name"
                    placeholder="Type your name"
                  />
                </div>
                <div class="w-full px-3 mt-4">
                  <input
                    data-aos="fade-up"
                    data-aos-duration="700"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    name="email"
                    placeholder="Type your email"
                  />
                </div>
                <div class="w-full px-3 mt-4">
                  <textarea
                    data-aos="fade-up"
                    data-aos-duration="800"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="message"
                    placeholder="Say Hi!"
                  />
                </div>
                <div class="w-full px-3 mt-4">
                  <button
                    data-aos="fade-up"
                    data-aos-duration="900"
                    type="submit"
                    class="px-4 py-2 bg-gray-700 hover:bg-gray-400 rounded text-white hover:text-black"
                  >
                    Send&nbsp;&nbsp;
                    <ion-icon name="send-outline" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
