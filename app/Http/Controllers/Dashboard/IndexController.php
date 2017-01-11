<?php
/**
 * Cytonn Technologies
 *
 * @author: Timothy Kimathi <tkimathi@cytonn.com>
 *
 * Project: cres.
 *
 */

namespace App\Http\Controllers\Dashboard;


use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET /template
     *
     * @return Response
     */
    public function index()
    {
        return view('dashboard.index');
    }

}