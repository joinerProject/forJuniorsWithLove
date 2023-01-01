export default class ProjectModel{
    public frontend:{
        language:string;
        technology:string;
    }
     public backend:{
        language:string;
        technology?:string;
    }
    public db:string;
    public operatingSystem?:string;
}
