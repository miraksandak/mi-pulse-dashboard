<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/api/dashboard', name: 'api_dashboard', methods: ['GET'])]
    public function getDashboard(): JsonResponse
    {
        sleep(1);
        return $this->json([
            'stats' => [
                ['label' => 'Live Hotels', 'value' => 158, 'color' => '#14aa71'],
                ['label' => 'Pre-Install + Reinstall', 'value' => 15, 'color' => '#eab308'],
                ['label' => 'Installation', 'value' => 6, 'color' => '#3b82f6'],
                ['label' => 'Maintenance', 'value' => 22, 'color' => '#ef4444'],
            ],
            'donutCharts' => [
                [
                    'title' => 'Managed Devices',
                    'labels' => ['AP', 'Switch', 'GW+FW'],
                    'data' => [1200, 450, 120],
                    'colors' => ['#1abc9c', '#9b59b6', '#f39c12'],
                    'total' => 1770,
                ],
                [
                    'title' => 'Monthly Closed Tickets',
                    'labels' => ['TechSupport', 'Helpline'],
                    'data' => [480, 220],
                    'colors' => ['#e74c3c', '#3498db'],
                    'total' => 700,
                ],
            ],
            'lineCharts' => [
                [
                    'title' => 'Bandwidth (last 7 days)',
                    'labels' => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    'data' => [2.8, 3.1, 3.0, 2.9, 3.2, 3.4, 3.1],
                    'color' => '#3498db',
                    'bgColor' => 'rgba(52, 152, 219, 0.2)',
                ],
                [
                    'title' => 'Rooms Operated (last 7 days)',
                    'labels' => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    'data' => [14000, 14120, 14200, 14350, 14410, 14500, 14520],
                    'color' => '#2ecc71',
                    'bgColor' => 'rgba(46, 204, 113, 0.2)',
                ],
            ],
        ]);
    }
}
