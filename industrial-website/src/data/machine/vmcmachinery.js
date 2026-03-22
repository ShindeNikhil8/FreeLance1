import vmc1 from "../../assets/images/machines/vmc1.png";
import vmc2 from "../../assets/images/machines/vmc2.png";

const vmcmachinery = [
    {
        id: 1,
        name:"BFW VMC Machine",
        image:vmc1,
        Travel:[
            "X: 900mm",
            "Y: 500mm",
            "Z: 500mm"
        ],
        SpindleSpeed: "8000 RPM",
        Controller:"Mitsubishi M80 series"
    },
    {
        id: 2,
        name:"Hitachi Seiki VA-40 VMC Machine",
        image:vmc2,
        Travel:[
            "X: 700mm",
            "Y: 400mm",
            "Z: 4500mm"
        ],
        SpindleSpeed: "4500 RPM",
        Controller:"Fanuc 6M"
    }
];

export default vmcmachinery;