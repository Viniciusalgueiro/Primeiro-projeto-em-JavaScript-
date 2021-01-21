function tempo(request, response) {
    const api_secret =process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch("https://api.convertkit.com/v3/subscribers?api_secret=${api_Secret}")
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.json({
        date: dynamicDate.toGMTstring(),
        inscritos: inscritos
    });
}

export default tempo;