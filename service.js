const Service = require('node-windows').Service;

const svc = new Service({
  name:'headlessdesk',
  description: 'A headless spacedesk client',
  script: 'spacedesk.min.js'
});

svc.on('install', function() {
  svc.start();
  console.log('Service installed.\n');
});

svc.on('uninstall', () => console.log('Service uninstalled.'));

function init(task){
  if (!task)
    return
  if (task == 'install' && !svc.exists) {
    console.log('Installing service...\n');
    svc.install();
  } else if (task == 'uninstall' && svc.exists) {
    console.log('Uninstalling service...\n');
    svc.uninstall();
  }
}

init(process.argv[2])