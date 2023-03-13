let btn = document.getElementById('toggleBtn')

        let bulb = document.getElementById('bulb')

            // click - event/sensor , toggleBulb - function

        btn.addEventListener('click',toggleBulb)

        function toggleBulb(event)
        {

            if(btn.textContent.includes('On'))
            {
                

                bulb.src="../images/bulb-on.jpg"

                btn.textContent = "Turn Off"
            }
            else{

                    bulb.src="../images/bulb-off.jpg"

                    btn.textContent = "Turn On"

                }
        }