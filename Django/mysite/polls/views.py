from django.shortcuts import render, get_object_or_404 
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.db.models import F

from .models import Question, Choice

from datetime import datetime 

# Create your views here.
def index(request):
    
    # questionlist = Question.objects.all()
    
    # # output = ''
    # # for q in questionlist:
    # #     output += q.question_text + ', '
    
    # output = ''.join(['<p>'+q.question_text+'</p>' for q in questionlist])
    # return HttpResponse(output)

    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "polls/index.html", context)

def detail(request, question_id):
    try:
        question = Question.objects.get(pk = question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "polls/detail.html", {"question": question})

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):

    '''
    select *
    from question 
    where question_id = (?)
    '''
    question = get_object_or_404(Question, pk = question_id)

    if request.method == 'POST':
        print(request.POST["something"])

    #每一个相关联的one to many的table，都会在上级table里做一个set
    # Error handling 
    try: 
        '''
        select c.*
        from question q 
        inner join choice c on c.question_id = q.question_id
        where c.choice_id = (?)
        '''
        selected_choice = question.choice_set.get(pk = request.POST["choice"])
    
    except (KeyError, Choice.DoesNotExist):
        return render(
            request,
            "polls/detail.html", 
            {
                "question": question,
                "error_message": "You didn't select a choice.",
            }
        )

    else: 
        '''
        update choice
        set votes = ?
        where c.choice_id = (?) 
        '''
        selected_choice.votes = F("votes") + 1

        '''
        commit
        '''
        selected_choice.save()

    return HttpResponse("You're voting on question %s." % question_id)

def addquestion(request):

    if request.method == 'POST':

        q = Question.objects.create(
        question_text = request.POST['question_text'], 
        pub_date = datetime.now()
        )
        q.save()

        choices = request.POST['choices'].splitlines()

        for choice_text in choices:
            if choice_text.strip():
                Choice.objects.create(
                    question = q,
                    choice_text = choice_text.strip(),
                    votes = 0
                )
    
        return HttpResponseRedirect('/polls/')

    return render(request, "polls/addquestion.html", None)