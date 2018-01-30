/*
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
*/

var findRestaurant = function(list1, list2) {
    let map = new Map(), count =0, res= new Map(), arr= [];
    for(let i = 0; i<list1.length; i++) {
        map.set(list1[i], i);
    }
    for(let i = 0; i<list2.length; i++) { 
        if(map.has(list2[i])) {
            res.set(list2[i], map.get(list2[i]) + i);
        }
    }
    var index = Math.min(...res.values());
    for(let [key, value] of res) {
        if(value === index) {
            arr.push(key);
        }
    }
    return arr;
    
};
