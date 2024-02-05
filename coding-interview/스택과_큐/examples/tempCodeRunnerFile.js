  popAt(idx) {
    if (idx < 0 || idx >= this.stacks.length || this.stacks[idx].size() === 0) {
      return null;
    }

    return this.stacks[idx].pop();
  }