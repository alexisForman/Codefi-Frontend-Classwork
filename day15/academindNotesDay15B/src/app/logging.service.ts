export class LoggingService {
  logStatusChange(status:string)  {
    console.log('A server status changed, new status: '+ status);
  }
}

// It might be tempting to think that since we import components into ts
// that maybe to use this we would import { LoggingService } from '../loggingService',

// Then call it later in the file in the export class, like this:

// const service = new LoggingService();
// service.logStatusChange(accountStatus);

// And this will work but Max is very very adament that this is wrong and we should not
// do it this way. This would be manually creating an instance of the service and Angular
// provides a much better way of doing this and thats why we dont do it manually.
