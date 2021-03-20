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
            activeCircle : "#circle"
            
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
            selectImage : function()
                        {
                            this.indexImages = this.image.index;
                        }
        }
});
