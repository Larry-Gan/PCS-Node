import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from 'src/redux/actions';
import { TodoForm } from 'src/containers';

export type AddTodoFn = (todo: string) => void;

export const InfoSection: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <>
        {/*<div className="max-w-7xl mx-auto px-6 ">Spacer</div>
      <div className="max-w-7xl mx-auto px-6">Spacer</div>
      <div className="max-w-7xl mx-auto px-6">i</div>
      max-w-7xl mx-auto px-2 sm:px-6 md:space-x-10 lg:px-8"*/}
      </>

      <div>
        <main>
          <div>
            <div className="inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mt-16 mx-auto py-4 sm:px-6 lg:px-8">
              <div className="relative shadow-xl">
                <div className="inset-0">
                  {/*<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />*/}
                  <div className="absolute inset-0 bg-indigo-500 rounded-2xl" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">The NODE Project</span>
                    <span className="block text-xl text-indigo-200">
                      {' '}
                      A tool to help connect you to your local representatives.
                      All of them.
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Just type your address into the search to find all the
                    representatives closest to you!
                  </p>
                  <div className="mt-6 max-w-lg mx-auto">
                    <TodoForm
                      addTodo={(todo: string) =>
                        dispatch({ type: ADD_TODO, todo })
                      }
                    />

                    {/*<div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <a href="#" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                        Get started
                        </a>
                        <a href="#" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                        Live demo
                        </a>
  </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <></>
    </>
  );
};
