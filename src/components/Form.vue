<template>
  <div>
    <section class="bg-white py-32">
      <div class="container mx-auto">
        <div class="grid grid-cols-2">
          <div>
            <h1 class="text-4xl font-bold tracking-wide">
              Let's talk.
            </h1>
          </div>
          <div>
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Name"
                  >
                </div>
                <div class="w-full px-3 mt-4">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    placeholder="Email"
                  >
                </div>
                <div class="w-full px-3 mt-4">
                  <textarea
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <div class="w-full px-3 mt-4">
                  <button
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
