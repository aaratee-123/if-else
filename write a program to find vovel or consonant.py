

names=input("enter the names")
hospital="hospital"
if(names==hospital):
    print("permission of team member")
    print("you do not have any helth issue then you can't")
elif(names and hospital):
    print("permission of disco")
    print("you have helth issue you give permission")
    if((names and hospital)):
        print("give permission of helth co-ordinator")
        print("you have fevour/skin disease/stomach pain")
        print("you can go to hosptial with sefty kit like sanitizor and mask")
    else:
        print("you can't go hospital")