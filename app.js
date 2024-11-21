const { createApp } = Vue

createApp({
  data() {
    return {
        playerHealth: 100,
        monsterHealth: 100
    }
    },
    methods: {
        attackMonster() {
            const attackValue = Math.floor (Math.random() * (12 - 5))
            this.monsterHealth -= attackValue;
            console.log("this is Me", attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = Math.floor (Math.random() * (12 - 5))
            this.playerHealth -= attackValue;
            console.table("this is a monster", attackValue)
        }
    }
  }
).mount('#game')