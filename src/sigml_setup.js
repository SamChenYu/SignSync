// CWASA Configuration
CWASA.init();
var cfg = {
    
    useClientConfig: true, 
    ambIdle: true, 
    avSettings: [
        {
            width: 384, 
            height: 320, 
            avList: "avs", 
            initAv: "anna", 
            initSpeed: 1, 
            rateSpeed: 5, 
            allowFrameSteps: true,
            initSiGMLURL: "example.sigml", 
            allowSiGMLText: true
        }
    ]
};


CWASA.init(cfg);