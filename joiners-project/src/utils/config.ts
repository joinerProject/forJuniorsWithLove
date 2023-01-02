class Config {
    public chatListUrl = '';
    public oneChatUrl = '';
    public userImagesUrl = "";
    public registerUrl = "";
    public loginUrl = "";
    public userUrl = "";
    public addChatUrl = '';
    public allChats = '';
    public confirmUser = "";
    public changePassword = "";
}
class DevelopmentConfig extends Config {
    public chatListUrl = 'http://localhost:3001/api/all-chats';
    public addChatUrl = 'http://localhost:3001/api/all-chats/add-chat';
    public allChats = 'http://localhost:3001/api/all-chats'
    public oneChatUrl = 'http://localhost:3001/api/requierd-chat/';
    public userImagesUrl = "http://localhost:3001/api/image/";
    public registerUrl = "http://localhost:3001/api/auth/register";
    public loginUrl = "http://localhost:3001/api/auth/login";
    public userUrl = "http://localhost:3001/api/add-user/";
    public confirmUser = "http://localhost:3001/api/auth/is-exist-user";
    public changePassword = "http://localhost:3001/api/auth/change-password";


}
class TestConfig extends Config {
    public chatListUrl = 'http://localhost:3001/api/all-chats/';
    public oneChatUrl = 'http://localhost:3001/api/requierd-chat/';
    public addChatUrl = 'http://localhost:3001/api/all-chats/add-chat';
    public allChats = 'http://localhost:3001/api/all-chats'
    public userImagesUrl = "http://localhost:3001/api/image/";
    public registerUrl = "http://localhost:3001/api/auth/register";
    public loginUrl = "http://localhost:3001/api/auth/login";
    public userUrl = "http://localhost:3001/api/add-user/";
    public confirmUser = "http://localhost:3001/api/auth/is-exist-user";
    public changePassword = "http://localhost:3001/api/auth/change-password";


}
class ProductionConfig extends Config {
    public chatListUrl = 'http://localhost:3001/api/all-chats/';
    public oneChatUrl = 'http://localhost:3001/api/requierd-chat/';
    public userImagesUrl = "http://localhost:3001/api/image/";
    public registerUrl = "http://localhost:3001/api/auth/register";
    public loginUrl = "http://localhost:3001/api/auth/login";
    public allChats = 'http://localhost:3001/api/all-chats'
    public userUrl = "http://localhost:3001/api/add-user/";
    public confirmUser = "http://localhost:3001/api/auth/is-exist-user";
    public changePassword = "http://localhost:3001/api/auth/change-password";


}
let config: Config;
if (process.env.NODE_ENV === "development") {
    config = new DevelopmentConfig();
} else if (process.env.NODE_ENV === 'test') {
    config = new TestConfig();
}
else {
    config = new ProductionConfig();
}

export default config;