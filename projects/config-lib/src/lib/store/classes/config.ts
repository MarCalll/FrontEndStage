export class Config {
    constructor(
        public basePath: string,
        public userGroup: string,
        public outlet: string,
        public routePath: string,
        public showToolbar?: boolean,
        public coreUser?: string,
        public jwt?: string
    ) {

    }
}