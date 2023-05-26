<template>
  <div>
    <!-- {{ store }} -->
    
    Layout {{  }}
    
    <slot />
    <button @click="text()">Test Fixed Promt</button>
  </div>
</template>

<script setup>
  // const counter = useCounter();
  // import { useCounterStore } from "~/stores/myStore";
  // const store = useCounterStore();

  // console.log(store.increment);
  

</script>

<script>
export default {
    data() {
      return {
          
      }
    },
    methods: {
      text() {
          const config = useRuntimeConfig()
          console.log('Runtime config:', config)
          console.log('Runtime config.public.baseURL:', config.public.baseURL)
          // console.log('Runtime config.secretKey:', config.secretKey)

          console.log(process.server);

          if (process.server) { //if process is happening in the server then
            console.log('API secret:', config.secretKey)
          }

          useFetch( `${config.public.baseURL}/completions`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${config.secretKey}`, //PRIVATE FOR DEPLOYMENT
                Authorization: `Bearer ${config.public.secretKey}`, // PUBLIC FOR TESTING ONLY
              },
                body: JSON.stringify({
                model: "text-davinci-003",
                prompt: "Write a funny joke",
                max_tokens: 250,
                temperature: 0.9
              })
          })
          .then(response => {
            // var temp = response.data[Object.keys(response.data)[0]];
            console.log(response);
            console.log(`Failed Promt: ${response.data.__v_isRef}`);

            var temp = response.data._rawValue.choices[0].text;
            if(response.data.__v_isRef == true) {
              
              console.log({
                "Text": temp,
                "id": response.data._rawValue.id,
                "created": response.data._rawValue.created,
                "model": response.data._rawValue.model,
                "object": response.data._rawValue.object,
                "completion_tokens": response.data._rawValue.usage.completion_tokens,
                "prompt_tokens": response.data._rawValue.usage.prompt_tokens,
                "total_tokens": response.data._rawValue.usage.total_tokens,
              });

            }
            else {
              console.log('Response Error', response.error._defaultValue);
            }
          })
          .catch(error => {
            console.error('Catch Error', error);
          })
      },
    },
}
</script>

<style>

</style>