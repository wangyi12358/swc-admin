import type {
  Atom,
  ExtractAtomArgs,
  ExtractAtomResult,
  ExtractAtomValue,
  WritableAtom,
  createStore
} from 'jotai';
import {
  useAtom,
  useAtomValue,
  useSetAtom,
} from 'jotai';

type SetAtom<Args extends any[], Result> = (...args: Args) => Result
type Store = ReturnType<typeof createStore>;

/**
 * 创建store访问器
 * @param store
 * @returns
 */
export function createStoreAccessor(store: Store) {
  /**
   * alias useAtom
   * @param atom
   */
  function useStoreAtom<Value, Args extends any[], Result>(
    atom: WritableAtom<Value, Args, Result>
  ): [Awaited<Value>, SetAtom<Args, Result>];
  function useStoreAtom<AtomType extends WritableAtom<any, any[], any>>(
    atom: AtomType
  ): [Awaited<ExtractAtomValue<AtomType>>, SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>];
  function useStoreAtom<AtomType extends Atom<any>>(atom: AtomType): [Awaited<ExtractAtomValue<AtomType>>, never];
  function useStoreAtom<Value>(atom: Atom<Value>) {
    return useAtom(atom)
  }

  /**
   * alias useAtomValue
   * @param atom
   */
  function useStoreAtomValue<AtomType extends Atom<any>>(atom: AtomType): Awaited<ExtractAtomValue<AtomType>>;
  function useStoreAtomValue<Value>(atom: Atom<Value>) {
    return useAtomValue(atom, { store })
  }

  /**
   * alias useSetAtom
   * @param atom
   */
  function useSetStoreAtom<AtomType extends WritableAtom<any, any[], any>>(
    atom: AtomType
  ): SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>;
  function useSetStoreAtom<Value, Args extends any[], Result>(atom: WritableAtom<Value, Args, Result>) {
    return useSetAtom(atom, { store })
  }

  /**
   * alias store.set
   * @param atom
   * @param updater
   */
  function setStoreAtom<Value, Args extends any[], Result>(atom: WritableAtom<Value, Args, Result>, ...args: Args) {
    store.set(atom, ...args)
  }
  return [ useStoreAtomValue, useSetStoreAtom, useStoreAtom, setStoreAtom ] as const
}
