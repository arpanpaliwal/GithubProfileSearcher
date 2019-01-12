import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfileService {
    private username: string;
    private client_id = '60b9f23dedffbdfc476c';
    private client_secret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
    constructor(private http: HttpClient) {}

    getUser() {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }

    getRepos() {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    }

    updateUserName(username: string) {
        this.username = username;
    }

}
