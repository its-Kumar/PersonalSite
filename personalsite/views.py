from django.shortcuts import redirect, render
from django.core.mail import send_mail, EmailMultiAlternatives
from django.contrib import messages


def index(request):
    if request.method == "POST":
        name = request.POST['name']
        subject = request.POST['subject']
        email = request.POST['email']
        message = request.POST['message']
        html = f"<p>Hey Kumar! <br> You get a message from {name}</p><br><p>Email: {email}</p><br> <p>Msg: {message}<p>"
        html_content = html
        msg = EmailMultiAlternatives(
            subject=subject, body=html_content, to=['kumarshanu1009@gmail.com'])
        msg.attach_alternative(html_content, "text/html")
        msg.send()

        messages.success(
            request, 'Your message has been send successfully. Thanks!')
        return redirect('/#contact')

    return render(request, 'index.html')
