var fs = require('fs');
var event_uuid = [
"c2668644c94406be735c1194","70a93aecc4ac2770f4dc65a1",
"81e8e9112e3c68d9007401e1",
"19b2d6e9334414b32183d6e4",
"4656f0288fa22b89bbf89496"]
var drag_uuid = [
    "58f3df063968d7f9b4135fd1",
    "d71c45631a3771368ea78029",
    "f9b33853292aa1cdab3f36e1",
    "4d99068070d0018da2aa7363",
    "5392574161d25aedc0c5496d"
]
var controls = [3,1,1,1,1]
var names = []
var event_timelines = []
var drop_Cache = {

}
var drag_Cache = {

}
function make_events(json){
    for(var index in drop_Cache){
        json.events["drop_group#"+index]={
            "uuid": "drop_group#"+index,
            "selectors": "drop_group#"+index,
            "params": {
              "evt_is_answer": false,
              "evt_show_tips": false,
              "evt_is_evt_scene_done": false,
              "evt_timeline_event": [drop_Cache[index]],
              "evt_timeline_autonext": true,
              "pause_explain_audio": false,
              "prevent_reaction": false,
              "evt_drop_enable": false,
              "evt_drop_disable_rotate": false,
              "evt_drag_at_step": "0",
              "evt_drop_not_back": false,
              "evt_drop_autonext": false,
              "evt_drop_play": false
            }
        }
    }
    for(var index in drag_Cache){
        var item = drag_Cache[index];
        var step = parseFloat(index);
        var drag_id = drag_uuid[step-1];
        if(item.length > 1){
            item.forEach(function(cur, ind, arr){
                var int_ind = parseFloat(ind);
                int_ind = int_ind + 1;
                var this_drag_id1 = drag_id.slice(int_ind+1);
                var this_drag_id2 = drag_id.slice(0,int_ind)
                var this_drag_id = this_drag_id2 + "b" + this_drag_id1
                var selector = "g#p"+step+"-1_zq"+int_ind+"_1";
                var tose = "g#p"+step+"-1_tozq"+int_ind+"_1";
                json.events[this_drag_id]={
                    "uuid": this_drag_id,                   
                    "selectors": selector,
                    "params": {
                      "evt_is_answer": true,
                      "evt_answer_group": ""+step,
                      "evt_show_tips": false,
                      "evt_is_evt_scene_done": false,
                      "evt_timeline_autonext": false,
                      "pause_explain_audio": false,
                      "prevent_reaction": false,
                      "evt_drop_enable": false,
                      "evt_drop_selector": tose,
                      "evt_drop_disable_rotate": false,
                      "evt_drop_group": ""+step,
                      "evt_drop_end_animation": [cur],
                      "evt_drag_at_step": "0",
                      "evt_drop_not_back": false,
                      "evt_drop_autonext": false,
                      "evt_drop_play": false
                    }
                }
            })
        }else{
            item.forEach(function(cur, ind, arr){
                var int_ind = parseFloat(ind);
                int_ind = int_ind + 1;
                var this_drag_id1 = drag_id.slice(int_ind+1);
                var this_drag_id2 = drag_id.slice(0,int_ind)
                var this_drag_id = this_drag_id2 + "b" + this_drag_id1
                var selector = "g#p"+step+"-1_zq"+int_ind+"_1";
                var tose = "g#p"+step+"-1_tozq"+int_ind+"_1";
                json.events[this_drag_id]={
                    "uuid": this_drag_id,
                    "selectors": selector,
                    "params": {
                      "evt_is_answer": true,
                      "evt_answer_group": step,
                      "evt_show_tips": false,
                      "evt_is_evt_scene_done": false,
                      "evt_timeline_autonext": false,
                      "pause_explain_audio": false,
                      "prevent_reaction": false,
                      "evt_drop_enable": false,
                      "evt_drop_selector": tose,
                      "evt_drop_disable_rotate": false,
                      "evt_drop_end_animation": [cur],
                      "evt_drag_at_step": "0",
                      "evt_drop_not_back": false,
                      "evt_drop_autonext": true,
                      "evt_drop_play": false
                    }
                }
            })

        }
    }
}
function make_resources(resources,json){
    for(var index in controls){
        var tmp = controls[index];
        var Indexx = parseFloat(index)
        var name;
        var houzhui;
        var step;
        var tmp_id = event_uuid[index];
        for(var i =0;i<tmp;i++){
            var this_id1 = tmp_id.slice(i+1);
            var this_id2 = tmp_id.slice(0,i)
            var this_id = this_id2 + "b" + this_id1
            if (tmp > 1&&i==tmp-1){
                name = (Indexx+1) +"c";
                drop_Cache[Indexx+1] = this_id;
            }else{   
                houzhui = i+1
                step = Indexx+1
                name = "zq"+step+houzhui;
                var pan = Array.isArray(drag_Cache[Indexx+1]) 
                if(pan){
                    drag_Cache[Indexx+1].push(this_id)
                }else{
                    drag_Cache[Indexx+1]=[this_id]
                }
                
            }
            event_timelines.push(this_id)
            resources[this_id] = {
                "uuid": this_id,
                "name": name,
                "kind": "Motion.Timeline",
                "tags": [],
                "audio": [],
                "scene_done": false,
                "extra": {},
                "subtitle": []
            }
        }
    }
}
function make_event_timelines(json){
    json.event_timelines = event_timelines;
}
fs.readFile("b.json", 'utf8',function(err,data){
    if(err) throw err
    var json = JSON.parse(data);
    var resources = json.resources;
    make_resources(resources,json);
    make_event_timelines(json);
    make_events(json);
    fs.writeFile('new.json', JSON.stringify(json), function(err){
        if(err) throw err;
    })
})
