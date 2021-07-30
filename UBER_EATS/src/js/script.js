const tabsBTN  = document.querySelectorAll('.b')

tabsBTN.forEach( item =>{

    item.addEventListener('click', () =>{

        let cBtn = item


        tabsBTN.forEach((i)=>{
        	i.style.color = '#000'
        })

        item.style.color = '#090'

    })
})