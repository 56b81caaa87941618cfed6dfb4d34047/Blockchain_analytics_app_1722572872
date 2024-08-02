/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722572875", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-500 to-purple-700 flex-1 p-8 relative overflow-hidden">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 relative z-10">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white rounded-xl p-8 shadow-xl">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Unlock the Power of Blockchain Data</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-200 md:text-lg">Gain real-time insights with our cutting-edge blockchain analysis platform</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Start Analyzing Now</a>
                </div>
            </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute top-1/4 left-1/4 w-20 h-20 bg-pink-400 rounded-full filter blur-xl opacity-50"></div>
            <div class="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-400 rounded-full filter blur-xl opacity-50"></div>
            <div class="absolute bottom-1/4 left-1/2 w-24 h-24 bg-indigo-400 rounded-full filter blur-xl opacity-50"></div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
