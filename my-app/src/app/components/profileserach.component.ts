import { Component } from '@angular/core';
import {ProfileService} from '../services/profiles.service';

@Component({
    selector: 'app-profile-search',
    templateUrl: 'profilesearch.component.html',
    providers: [ProfileService]
})
export class ProfileSearchComponent {
    user: any;
    repos: any;
    username: string;
    constructor(private profileService: ProfileService){
        console.log('profile service Init...');
    }
    search() {
        this.profileService.updateUserName(this.username);
        this.profileService.getUser().subscribe(user => {
            this.user = user;
        });
        this.profileService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}