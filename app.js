let tl = gsap.timeline({
    repeat: -1, 
    repeatDelay: 1,
})
let t2 = gsap.timeline({
    repeat: 1
})
tl.to('.eye-wrapper', {
    opacity: 1,
    delay: .1,
    duration: 3.5,
}) 
tl.to('.eye--right', {
    backgroundColor: 'red'
}) 
tl.to('.brow--top', {
    y: '-50%',
    delay: 1
})
tl.to('.brow--top', {
    y: '-100%', 
})
tl.to('.brow--bottom', {
    y: '50%',
    delay: -1
})
tl.to('.brow--bottom', {
    y: '100%',
    delay: -.5
})

tl.to('.eye', {
    delay: 1,
})
tl.to('.p', {
    delay: -.5,
})
tl.to('.r', {
    delay: -.5,
})
tl.to('.eye-eye--left', {
    x: 33,
    delay: .5,
})
tl.to('.eye-eye--right', {
    x: -33,
    delay: -.47,
})

tl.to('.eye', {
})

tl.to('.eye-eye--left', {
    x: 0,
    delay: .5
})
tl.to('.eye-eye--right', {
    x: 0,
    delay: -.47
})
tl.to('.eye-eye--left', {
    x: -33,
    y: 22,
    delay: .5
})
tl.to('.eye-eye--right', {
    x: 33,
    y: -22,
    delay: -.47
})
tl.to('.eye-eye--left', {
    x: 0,
    y: 0,
    delay: .5
})

tl.to('.eye-eye--right', {
    x: 0,
    y: 0,
    delay: -.47
})
tl.to('.brow--top', {
    y: '-50%',
    delay: 1
})
tl.to('.brow--top', {
    y: '-100%', 
})
tl.to('.brow--bottom', {
    y: '50%',
    delay: -1
})
tl.to('.brow--bottom', {
    y: '100%',
    delay: -.5
})
tl.to('.eye', {
    backgroundColor: '#fff',
})
tl.to('.p', {
    backgroundColor: '#fff',
    delay: -.5
})
tl.to('.r', {
    color: '#fff',
    delay: -.5,
})

t2.to('.a', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "slow(0.7,0.7,false)",
    duration: 1.4,
})
t2.to('.t', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "power3.out",
    duration: 1.5,
})
t2.to('.t2', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "power3.out",
    duration: 2,
}) 
t2.to('.e', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "power3.out",
    duration: 1.5,
})
t2.to('.n', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "back.out(1.7)",
    duration: 1.5,
})
t2.to('.t3', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "back.out(1.7)",
    duration: 6,
    color: '#fff'
})
t2.to('.t3', {
    color: 'red',
    delay: -10.5,
    duration: 3,
})
t2.to('.t3', {
    color: '#fff',
    delay: -10,
    duration: 2.5,
})
t2.to('.i', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "back.out(1.7)",
    duration: 6,
    color: '#fff'
})
t2.to('.i', {
    color: 'red',
    delay: -10.5,
    duration: 3,
})
t2.to('.i', {
    color: '#fff',
    delay: -10,
    duration: 2.5,
})
t2.to('.o', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "bounce.out",
    duration: 2,
    color: '#fff'
})
t2.to('.o', {
    duration: .4,
    delay: -12.6,
    color: 'gold',
})
t2.to('.o', {
    duration: .4,
    delay: -12.12,
    color: '#2417df',
})
t2.to('.o', {
    duration: .4,
    delay: -11.7,
    color: 'green',
})
t2.to('.o', {
    duration: .4,
    delay: -11.2,
    color: 'yellow',
})
t2.to('.o', {
    duration: .4,
    delay: -11,
    color: '#fff',
})
t2.to('.n2', {
    x: 0,
    y: 0,
    rotate: 360,
    delay: -13,
    ease: "bounce.out",
    duration: 2,
    color: '#fff'
})
