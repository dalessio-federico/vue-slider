var app = new Vue(
{
    el : "#root",
    data : 
        {
            indexImages : 0 ,
            images : 
            [
                "img/71vXOkjuRZL.jpg",
                "img/escape-from-tarkov-beta-cover.webp",
                "img/VJh2maKk8q2XDTKSUp5aScye.webp",
                "img/xaOrA7ZIur35LkfIzxtOECFv.webp"
            ],
        },

    created : function()
            {
                document.addEventListener("keydown", this.arrowMoves);
            },

    methods :
        {
            next : function()
                    {
                        if (this.indexImages == this.images.length -1)
                        {
                            this.indexImages = 0;
                        }
                        else 
                        {
                            this.indexImages++;
                        };
                    } ,

            arrowMoves : function(e)
            {
                switch(e.keyCode)
                    {
                        case 37:
                        this.prew();
                        break;
                        case 39 :
                        this.next();
                        break;
                    };
            },

            prew : function()
                    {
                        if (this.indexImages == 0)
                        {
                            this.indexImages = this.images.length -1;
                        }
                        else
                        {
                            this.indexImages--;
                        };
                    },
            
        },
});
