package com.example.demo.controller;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSON;
import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import com.example.demo.common.Result;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.List;

@RestController
@RequestMapping("/files")
@CrossOrigin
public class FIleController {
    @Value("${server.port}")
    private String port;

    private static final String ip = "http://localhost";

    /**
     * 上传接口
     * @param file
     * @return
     * @throws IOException
     */

    @PostMapping("/upload")
    @CrossOrigin
    public Result<?> upload(MultipartFile file) throws IOException {

        String originalFilename = file.getOriginalFilename(); //获取源文件名称
        //定义文件唯一标识(尝试三种)
//        RandomUtil.
//        long l = System.currentTimeMillis();
        String flag = IdUtil.fastSimpleUUID();
        String rootFilePath = System.getProperty("user.dir") + "/src/main/resources/files/" + flag + "_" + originalFilename;//获取上传的路径
        FileUtil.writeBytes(file.getBytes(), rootFilePath);//把文件写入到上传路径
        return Result.success(ip + ":" + port + "/files/" + flag);//返回结果url
    }


    /**
     * 副文本文件上传接口
     * @param file
     * @return
     * @throws IOException
     */
    @PostMapping("/editor/upload")
    @CrossOrigin
    public JSON editorUpload(MultipartFile file) throws IOException {

        String originalFilename = file.getOriginalFilename(); //获取源文件名称
        //定义文件唯一标识(尝试三种)
//        RandomUtil.
//        long l = System.currentTimeMillis();
        String flag = IdUtil.fastSimpleUUID();
        String rootFilePath = System.getProperty("user.dir") + "/src/main/resources/files/" + flag + "_" + originalFilename;//获取上传的路径
        FileUtil.writeBytes(file.getBytes(), rootFilePath);//把文件写入到上传路径
        String url = ip + ":" + port + "/files/" + flag;
        JSONObject json = new JSONObject();
        json.set("errno", 0);
        JSONArray arr = new JSONArray();
        JSONObject data = new JSONObject();
        arr.add(data);
        data.set("url", url);
        json.set("data", arr);
        return json;//返回结果url
    }



    /**
     * 下载接口
     * @param flag
     * @param response
     */
    @GetMapping("/{flag}")
    public void getFiles(@PathVariable String flag, HttpServletResponse response) {
        OutputStream os;  // 新建一个输出流对象
        String basePath = System.getProperty("user.dir") + "/src/main/resources/files/";  // 定于文件上传的根路径
        List<String> fileNames = FileUtil.listFileNames(basePath);  // 获取所有的文件名称
        String fileName = fileNames.stream().filter(name -> name.contains(flag)).findAny().orElse("");  // 找到跟参数一致的文件
        try {
            if (StrUtil.isNotEmpty(fileName)) {
                response.addHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
                response.setContentType("application/octet-stream");
                byte[] bytes = FileUtil.readBytes(basePath + fileName);  // 通过文件的路径读取文件字节流
                os = response.getOutputStream();   // 通过输出流返回文件
                os.write(bytes);
                os.flush();
                os.close();
            }
        } catch (Exception e) {
            System.out.println("文件下载失败");
        }
    }
}
