export default defineEventHandler(async (event)=>{

    // //handle query params
    // const {name}=getQuery(event)

    // // Handle post data
    // const {age}=await readBody(event)

    //api call with private key

    const {data} =await $fetch('https://api.currencyapi.com/v3/latest?apikey=j0ZlBWQ4nTyRsfTLqCxfBnr6rLyc0O7ZkKKXq1pe')

    return data
})