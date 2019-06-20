
@Injectable()
export class EventBusService {
    private subject = new Subject<any>();

    on(event: Events, action: any): Subscription {
        return this.subject.pipe(filter((e: EmitEvent))=> {
            return e.name ==event;
        })
        .map((event:EmitEvent)=>{
            return event.value;
        })
        .subscribe(action);
    }

    emit(event:EmitEvent){
        this.subject.next(event);
    }
}