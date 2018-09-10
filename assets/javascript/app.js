let topics = ["Cats", "Hamsters", "Dogs", "Bunnies"];
for(each of topics)
{
    let $input = $(`<input type = button value= ${each}>`);
    $input.appendTo($(".topics"));
}



$(".topics").click(function(event) {
    $(".pics").empty();
    event = event.target.value;
    $.ajax({
        url : "https://api.giphy.com/v1/gifs/search?q="
        + event + "&limit=10&rating=&api_key=RDcmeEU21sg2RirUOUxDSjabNPWW990x&"
    }).done( function(data) {

        let $img1 = []
        let $img2 = []
        let rating = [];

        for(each of data.data)
        {
            

            $img1.push(each.images.downsized_still.url)
            $img2.push(each.images.downsized.url);
            rating.push(each.rating);
            
           
        }
        
        
        z=0;
        for(each of $img1){
            $(`<p class ="${z}"><img src = ${each} > <br><br></p>`).appendTo($(".pics"));
            z++

        }
        
        for(let i = 0; i < 10; i++)
        {
            $(`.${i}`).append(`Rating: ${rating[i]}`);
            
        }



        
        $("img").click(function(event) {
            
            event = event.target
            for(let i = 0;i < 10; i++)
            {
                
                if(event.src == $img1[i])
                {
                    event.src = $img2[i];
                    
                }else
                if(event.src == $img2[i])
                {
                    event.src = $img1[i];
                }
            
            }
            
        })
        

    }); 
    


})



