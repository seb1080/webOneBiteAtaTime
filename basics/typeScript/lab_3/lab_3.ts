interface IALert {
  name: string;
  showMessage(): void;
}

class Alerter implements  IALert {
  name = "Seb";
  showMessage() {
    const msg = dataService.getMessage()
  }  
}