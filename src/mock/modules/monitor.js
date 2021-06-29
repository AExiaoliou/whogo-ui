export function server () {
  const data = {
    code: 200,
    msg: null,
    data: {
      cpu: {
        cpuNum: 1,
        total: 9900,
        sys: 0,
        used: 3.03,
        wait: 0,
        free: 96.97
      },
      mem: {
        total: 1.79,
        used: 0.97,
        free: 0.83,
        usage: 53.82
      },
      jvm: {
        total: 66.53,
        max: 193.38,
        free: 21.69,
        version: '11.0.6',
        home: '/usr/local/openjdk-11',
        runTime: '0天0小时4分钟',
        usage: 67.4,
        used: 44.84,
        startTime: '2021-06-29 15:09:35',
        name: 'OpenJDK 64-Bit Server VM'
      },
      sys: {
        computerName: null,
        computerIp: null,
        userDir: '/',
        osName: 'Linux',
        osArch: 'amd64'
      },
      sysFiles: [
        {
          dirName: '/',
          sysTypeName: 'overlay',
          typeName: '/',
          total: '98.3 GB',
          free: '82.4 GB',
          used: '15.9 GB',
          usage: 16.14
        },
        {
          dirName: '/logs',
          sysTypeName: 'ext4',
          typeName: '/dev/vda1',
          total: '98.3 GB',
          free: '82.4 GB',
          used: '15.9 GB',
          usage: 16.14
        },
        {
          dirName: '/etc/resolv.conf',
          sysTypeName: 'ext4',
          typeName: '/dev/vda1',
          total: '98.3 GB',
          free: '82.4 GB',
          used: '15.9 GB',
          usage: 16.14
        },
        {
          dirName: '/etc/hostname',
          sysTypeName: 'ext4',
          typeName: '/dev/vda1',
          total: '98.3 GB',
          free: '82.4 GB',
          used: '15.9 GB',
          usage: 16.14
        },
        {
          dirName: '/etc/hosts',
          sysTypeName: 'ext4',
          typeName: '/dev/vda1',
          total: '98.3 GB',
          free: '82.4 GB',
          used: '15.9 GB',
          usage: 16.14
        }
      ]
    }
  }
  return {
    url: 'monitor/server',
    type: 'get',
    data: data
  }
}
