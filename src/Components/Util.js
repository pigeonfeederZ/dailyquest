// Util.js

// Produce a list of quests that are singly linked 
const nums = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,25,30,35,40,45,50]
const questListSample_NSents = nums.map((num, i) => {
    const dscrpt = `在<写点子攻防>中看${num}个句子`
    const id = 107+i
    const config = (i<nums.length-1) ? {linkedNextId : 107 +i+1} : null
    const totalProgress = num
    const template = {
        id: id,
        dscrpt: dscrpt,
        progress: i>0 ? nums[i-1] : 0,
        totalProgress: totalProgress,
        config: config
    }
    return template})
// console.log(questListSample_NSents.toLocaleString())


const sample = [

    // 写论文
    // 字数、段落、句子、时间、五分钟、三分钟、一分钟、
    // 


    // 总目标？（不推荐） 一天、一周、一月、一年、
    {
      id: 0,
      // dscrpt: 'Defeat 10 enemies',
      dscrpt: '在<写点子攻防>中扮演攻击方1次',
      progress: 0,
      totalProgress: 1,
    },
    {
      id: 99,
      dscrpt: '在<写点子攻防>中扮演防御方1次',
      progress: 0,
      totalProgress: 1,
    },
    // {
    //   id: 1,
    //   dscrpt: '在<写点子攻防>中扮演攻击方3次',
    //   progress: 0,
    //   totalProgress: 3,
    // },
    {
      id: 4,
      dscrpt: '在<写点子攻防>中看1个句子',
      progress: 0,
      totalProgress: 1,
      config: {
        linkedNextId: 97,
      }
    },
    {
      id: 97,
      dscrpt: '在<写点子攻防>中看2个句子',
      progress: 1,
      totalProgress: 2,
    },
    {
      id: 4,
      dscrpt: '在<写点子攻防>中投入1分钟攻击时间',
      progress: 0,
      totalProgress: 1,
    },
    {
      id: 4,
      dscrpt: '在<写点子攻防>中投入1分钟防御时间',
      progress: 0,
      totalProgress: 1,
    },
    {
      id: 5,
      dscrpt: '在<写点子攻防>中单次攻击时间达到1分钟',
      progress: 0,
      totalProgress: 1,
    },
    // {
    //   id: 7,
    //   dscrpt: '在<写点子攻防>中投入3分钟攻击时间',
    //   progress: 0,
    //   totalProgress: 3,
    // },
    // {
    //   id: 7,
    //   dscrpt: '在<写点子攻防>中投入60分钟攻击时间',
    //   progress: 0,
    //   totalProgress: 60,
    // },
    // {
    //   id: 3,
    //   dscrpt: '找工作',
    //   // dscrpt: 'Defeat 10 enemies',
    //   progress: 0,
    //   totalProgress: 1,
    // }
  ]

export {questListSample_NSents}
