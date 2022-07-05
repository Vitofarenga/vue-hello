const app = new Vue (
    {
        el : '#root',
        data :{
            message : '',
        },
        methods : {
             updateImageSrc ( source ){
                this.ImageSrc = source;
             }
        },

        
    }
)