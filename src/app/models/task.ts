export class Task {
    id: number;
    detail: String;
    status: String = 'pending';
    day: String;
    role: number;
    constructor(detail: String, day: String){
        this.detail = detail;
        this.day = day;
    }
    done() {
        this.status = 'done';
    }
}
