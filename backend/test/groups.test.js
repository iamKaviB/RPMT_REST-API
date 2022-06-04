const {getStdGroups,createStdGroups ,allocatePanelMember,allocateSupervisor,allocateCoSupervisor} = require('../controllers/student-groups/studentGroups.controller')

test('create a group', async ()=>{
        const req = {
            "body":{

                "topic": "gdfgd124",
                "member1Id": "1IT199615903",
                "member2Id": "1IT199615913",
                "member3Id": "1IT199615923",
                "member4Id": "1IT199615933",
                "panelMembersId": []

            }
        }
        const response = await createStdGroups(req)
    expect(response.message).toEqual("created")

})

test('create a group', async ()=>{
    const req = {
        "body":{

            "topic": "gdfgd124",
            "member1Id": "1IT199615903",
            "member2Id": "1IT199615913",
            "member3Id": "1IT199615923",
            "member4Id": "1IT199615933",
            "panelMembersId": []

        }
    }
    const response = await createStdGroups(req)
    expect(response.message).toEqual("created")

})