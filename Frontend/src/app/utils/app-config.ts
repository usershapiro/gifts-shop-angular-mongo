class AppConfig {

    public targetsUrl = "http://localhost:3001/api/targets/";
    public giftByTargetUrl = "http://localhost:3001/api/gifts-by-targetId/";
    public addGiftUrl ="http://localhost:3001/api/gifts/";
    public deleteGiftUrl ="http://localhost:3001/api/gifts/"
}

export const appConfig= new AppConfig();