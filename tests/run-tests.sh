#!/bin/bash

# Playwright Test Runner Script
# This script provides various options for running tests

echo "🎭 Playwright Test Runner"
echo "========================"

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  all         Run all tests (default)"
    echo "  home        Run home page tests only"
    echo "  auth        Run authentication tests only"
    echo "  nav         Run navigation tests only"
    echo "  perf        Run performance tests only"
    echo "  comp        Run comprehensive tests only"
    echo "  ui          Run tests with UI mode"
    echo "  headed      Run tests with browser visible"
    echo "  debug       Run tests in debug mode"
    echo "  report      Run tests and generate HTML report"
    echo "  install     Install Playwright browsers"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 all"
    echo "  $0 home"
    echo "  $0 ui"
    echo "  $0 report"
}

# Function to run tests
run_tests() {
    local test_file=$1
    local options=$2
    
    echo "🚀 Running tests: $test_file"
    echo "Options: $options"
    echo ""
    
    if [ -n "$test_file" ]; then
        pnpm test "$test_file" $options
    else
        pnpm test $options
    fi
    
    local exit_code=$?
    
    if [ $exit_code -eq 0 ]; then
        echo "✅ Tests completed successfully!"
    else
        echo "❌ Tests failed with exit code: $exit_code"
    fi
    
    return $exit_code
}

# Function to install browsers
install_browsers() {
    echo "📦 Installing Playwright browsers..."
    pnpm exec playwright install
    echo "✅ Browsers installed successfully!"
}

# Function to generate report
generate_report() {
    echo "📊 Generating test report..."
    pnpm test --reporter=html
    echo "✅ Report generated! Open playwright-report/index.html to view results."
}

# Main script logic
case "${1:-all}" in
    "all")
        run_tests "" ""
        ;;
    "home")
        run_tests "home.spec.ts" ""
        ;;
    "auth")
        run_tests "auth.spec.ts" ""
        ;;
    "nav")
        run_tests "navigation.spec.ts" ""
        ;;
    "perf")
        run_tests "performance.spec.ts" ""
        ;;
    "comp")
        run_tests "comprehensive.spec.ts" ""
        ;;
    "ui")
        run_tests "" "--ui"
        ;;
    "headed")
        run_tests "" "--headed"
        ;;
    "debug")
        run_tests "" "--headed --debug"
        ;;
    "report")
        generate_report
        ;;
    "install")
        install_browsers
        ;;
    "help"|"-h"|"--help")
        show_usage
        ;;
    *)
        echo "❌ Unknown option: $1"
        echo ""
        show_usage
        exit 1
        ;;
esac

exit $?
