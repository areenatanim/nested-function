const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallest(name) {
        let small = name[0];
        for (const nam of name) {
                if (nam < small) {
                        
                        small = nam;
                }
        }
        return small ;
}
const small = smallest(heights2);
console.log(small);
