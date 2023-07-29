package com.exam.examserver.controllers;

import com.exam.examserver.entities.exam.Category;
import com.exam.examserver.entities.exam.Quiz;
import com.exam.examserver.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    // add quiz
    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update quiz

    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    //get quiz all

    @GetMapping("/")
    public ResponseEntity<?> quizzes() {

        return ResponseEntity.ok(this.quizService.getQuizzes());
    }
    //get a single quiz

    @GetMapping("/{qid}")
    public Quiz quiz(@PathVariable("qid") Long qid) {

        return this.quizService.getQuiz(qid);
    }

    //delete a quiz

    @DeleteMapping("/{qId}")
    public void delete(@PathVariable("qId") Long qid) {

        this.quizService.deleteQuiz(qid);
    }

    //get a quiz category

    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid) {
        Category category = new Category();
        category.setCId(cid);
        return this.quizService.getQuizzesOfCategory(category);
    }

    //get active quiz

    @GetMapping("/active")
    public List<Quiz> getActiveQuizzes() {

        return this.quizService.getActiveQuizzes();
    }


    //get active quiz category

    @GetMapping("/category/active/{cid}")
    public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid) {
        Category category = new Category();
        category.setCId(cid);
        return this.quizService.getActiveQuizzesOfCategory(category);
    }








}
