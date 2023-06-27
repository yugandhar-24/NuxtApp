export default defineEventHandler(async (event)=>{


    const {CODE}=event.context.params
    const {currencyKey} =useRuntimeConfig()

    const uri=`https://api.currencyapi.com/v3/latest?currencies=${CODE}&apikey=${currencyKey}`

    const {data}=await $fetch(uri)
  
    return data
})  