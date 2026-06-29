const Greeting =({ isPremium }) => {
  
    return (
        <h2>
            {
                isPremium ?  "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!" 
            }
            
        </h2>  
    )  
}

export default Greeting;
